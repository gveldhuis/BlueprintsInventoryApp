from django.contrib import admin
from inventory.models import Category, Supply, InventoryItem

#Filters here.
class SupplyFlagFilter(admin.SimpleListFilter):
    title = 'Flag status' # a label for our filter
    parameter_name = 'flagged' # you can put anything here

    def lookups(self, request, model_admin):
        # This is where you create filter options; we have two:
        return [
            ('flagged', 'Flagged'),
            ('not_flagged', 'Not flagged'),
            ]

    def queryset(self, request, queryset):
        # This is where you process parameters selected by use via filter options:
        if self.value() == 'flagged':
            # Get websites that have at least one page.
            return queryset.distinct().filter(flagged=True)
        if self.value() == 'not_flagged':
            # Get websites that don't have any pages.
            return queryset.distinct().filter(flagged=False)

#ModelAdmin templates here.
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'category')

    def category(self, obj):
        return obj.name

class SupplyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'brand', 'ref_number', 'price', 'category', 'flagged')
    search_fields = ['id', 'name', 'brand', 'ref_number']
    list_filter = [SupplyFlagFilter]

class InventoryItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'amount', 'supply_name', 'supply_brand', 'supply_ref', 'supply_price', 'supply_category', 'expiration_date', 'supply_id', 'volunteer')
    search_fields = ['id', 'amount', 'supply_name', 'supply_brand', 'supply_ref', 'supply_price', 'supply_category']

    def supply_id(self, obj):
        return obj.supply.id

    def supply_name(self, obj):
        return obj.supply.name

    def supply_brand(self, obj):
        return obj.supply.brand

    def supply_ref(self, obj):
        return obj.supply.ref_number

    def supply_price(self, obj):
        return obj.supply.price

    def supply_category(self, obj):
        return obj.supply.category

# Register your models here.
admin.site.register(Category, CategoryAdmin)
admin.site.register(Supply, SupplyAdmin)
admin.site.register(InventoryItem, InventoryItemAdmin)

#Change Console Header
admin.site.site_header = "Blueprints For Pangaea - Admin Console"
admin.site.site_title = "Console"

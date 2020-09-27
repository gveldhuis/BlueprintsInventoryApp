from django.contrib import admin
from django.urls import path
from login import views as login_views
from inventory import views as inventory_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/events/', login_views.event_list),
    path('api/organizations/', login_views.organization_list),
    path('api/register_volunteer/', login_views.register_volunteer),
    path('api/register_inventory/', inventory_views.add_inventory),
    path('api/register_supply/', inventory_views.add_supply),
    path('api/search_supply/', inventory_views.search_supply),
    path('api/stats/', inventory_views.volunteer_statistics),
    path('upload_supply/', inventory_views.import_supply_csv),
    path('supply_info/', inventory_views.export_supply_csv),
    path('inventory_info/', inventory_views.export_inventory_csv)
]

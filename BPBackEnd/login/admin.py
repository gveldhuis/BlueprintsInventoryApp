from django.contrib import admin
from login.models import Chapter, Organization, Event, Volunteer

#ModelAdmin templates here.
class ChapterAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'university')

class OrganizationAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'name', 'email')

class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'chapter', 'date', 'password')

class VolunteerAdmin(admin.ModelAdmin):
    list_display = ('id', 'event', 'organization', 'first_name', 'last_name', 'email')

# Register your models here.
admin.site.register(Chapter, ChapterAdmin)
admin.site.register(Organization, OrganizationAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Volunteer, VolunteerAdmin)

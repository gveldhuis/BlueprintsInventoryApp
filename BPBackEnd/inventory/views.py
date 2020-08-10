from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
import re
import datetime
from django.views.decorators.csrf import csrf_exempt
from .models import Supply, InventoryItem, Category
from login.models import Event, Volunteer

def authenticate_volunteer(volunteer_id,password):
    #Validate volunteer_id
    #Verifies volunteer_id is an integer
    if isinstance(volunteer_id, int) == False:
        return [False,'Invalid volunteer ID. Must be an integer.']
    #Verifies that volunteer_id is valid ID
    volunteer_query = Volunteer.objects.filter(id=volunteer_id)
    if volunteer_query.count() == 0:
        return [False,'Volunteer ID out of range.']

    #Retrieve event password associated with volunteer
    volunteer = Volunteer.objects.get(id=volunteer_id)
    event_password = volunteer.event.password

    #Validate password
    #Verifies password is a string
    if isinstance(password, str) == False:
        return [False, 'Invalid password. Must be a string.']
    #Checks password against event_password
    if password != event_password:
        return [False, 'Incorrect password']
    return [True]

# Create your views here.
@csrf_exempt
def add_inventory(request):
    #Load JSON request
    context = json.loads(request.body)

    #Authenicate volunteer credentials
    auth = authenticate_volunteer(volunteer_id = context['volunteer'], password = context['password'])
    if auth[0] == False:
        return JsonResponse({'success':False,'error':auth[1]})
    volunteer_obj = Volunteer.objects.get(id=context['volunteer'])

    #Validate amount
    #Verifies amount is an integer
    if isinstance(context['amount'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid amount. Must be an integer.'})

    #Validate supply
    #Verifies supply is an integer
    if isinstance(context['supply'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid supply ID. Must be an integer.'})
    #Verifies that supply is valid ID
    supply_query = Supply.objects.filter(id=context['supply'])
    if supply_query.count() == 0:
        return JsonResponse({'success':False,'error':'Supply ID out of range.'})
    supply_obj = Supply.objects.get(id=context['supply'])

    #Validate expiration date
    expiration_date = context['expiration_date']
    #Verify expiration_year is an integer
    if isinstance(expiration_date['year'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid expiration year. Must be an integer.'})
    #Verify expiration_year is under 3000
    if expiration_date['year'] >= 3000:
        return JsonResponse({'success':False,'error':'Expiration year invalid. Must be under 3000.'})
    #Verify expiration_month is an integer
    if isinstance(expiration_date['month'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid expiration month. Must be an integer.'})
    #Verify expiration_year is under 3000
    if expiration_date['month'] > 12:
        return JsonResponse({'success':False,'error':'Expiration month invalid. Must be under 13.'})
    #Verify expiration_year is an integer
    if isinstance(expiration_date['day'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid expiration day. Must be an integer.'})
    #Verify expiration_year is under 3000
    if expiration_date['day'] > 31:
        return JsonResponse({'success':False,'error':'Expiration day invalid. Must be under 32.'})

    #Register valid inventory item
    expiration_date = datetime.date(expiration_date['year'],expiration_date['month'],expiration_date['day'])
    inv = InventoryItem(expiration_date=expiration_date, amount=context['amount'], supply=supply_obj, volunteer=volunteer_obj)
    inv.save()
    #Check if expiration_date is in future.
    if expiration_date < datetime.date.today():
        return JsonResponse({'success':True,'category':'Expired'})
    elif inv.supply.flagged:
        return JsonResponse({'success':True, 'category':'Flagged'})
    else:
        return JsonResponse({'success':True,'category':inv.supply.category.name})

@csrf_exempt
def add_supply(request):
    #Load JSON request
    context = json.loads(request.body)

    #Authenicate volunteer credentials
    auth = authenticate_volunteer(volunteer_id = context['volunteer'], password = context['password'])
    if auth[0] == False:
        return JsonResponse({'success':False,'error':auth[1]})

    #Validate name
    #Verifies that name is a string
    if isinstance(context['name'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid name. Must be a string.'})
    #Verifies that name is under 100 characters
    if len(context['name']) > 100:
        return JsonResponse({'success':False,'error':'First name must be under 100 characters.'})

    #Validate brand
    #Verifies that brand is a string
    if isinstance(context['brand'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid brand. Must be a string.'})
    #Verifies that brand is under 100 characters
    if len(context['brand']) > 100:
        return JsonResponse({'success':False,'error':'brand must be under 100 characters.'})

    #Validate REF number
    #Verifies that ref_number is a string
    if isinstance(context['ref_number'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid REF number. Must be a string.'})
    #Verifies that first_name is under 30 characters
    if len(context['ref_number']) > 20:
        return JsonResponse({'success':False,'error':'REF number must be under 20 characters.'})

    supply_obj = Supply(ref_number=context['ref_number'], brand=context['brand'], name=context['name'])
    supply_obj.save()
    return JsonResponse({'success':True,'id':supply_obj.id})

@csrf_exempt
def search_supply(request):
    #Load JSON request
    context = json.loads(request.body)

    #Authenicate volunteer credentials
    auth = authenticate_volunteer(volunteer_id = context['volunteer'], password = context['password'])
    if auth[0] == False:
        return JsonResponse({'success':False,'error':auth[1]})

    #Retrieve data
    name_data = list(Supply.objects.values_list('name', flat=True))
    brand_data = list(Supply.objects.values_list('brand', flat=True))
    ref_data = list(Supply.objects.values_list('ref_number', flat=True))

    #Create SuperSet
    superset = Supply.objects.none()

    #Save image text to local variable
    image_text = context['image_text']

    #Find all supply names in image text and retrieve associated supply objects
    for value in name_data:
        if value in image_text:
            supply_query = Supply.objects.filter(name=value)
            superset = superset | supply_query

    #Find all supply brands in image text and retrieve associated supply objects
    for value in brand_data:
        if value in image_text:
            supply_query = Supply.objects.filter(brand=value)
            superset = superset | supply_query

    #Find all supply reference numbers in image text and retrieve associated supply objects
    for value in ref_data:
        if value in image_text:
            supply_query = Supply.objects.filter(ref_number=value)
            superset = superset | supply_query

    #Eliminate redundant supply objects
    superset = superset.distinct()

    #Build JSON response from SuperSet
    search_results = []
    for supply_obj in superset:
        points = 0
        if supply_obj.name in image_text:
            points += 1
        if supply_obj.brand in image_text:
            points += 2
        if supply_obj.ref_number in image_text:
            points += 3

        search_results.append([points,{'id':supply_obj.id,'ref_number':supply_obj.ref_number,'brand':supply_obj.brand,'name':supply_obj.name,'category':supply_obj.category.name}])

    #Sort search results by points
    search_results.sort(key = lambda x:x[0])

    return JsonResponse({'search_results':search_results})

@csrf_exempt
def volunteer_statistics(request):
    #Load JSON request
    context = json.loads(request.body)

    #Authenicate volunteer credentials
    auth = authenticate_volunteer(volunteer_id = context['volunteer'], password = context['password'])
    if auth[0] == False:
        return JsonResponse({'success':False,'error':auth[1]})

    vol = Volunteer.objects.get(id = context['volunteer'])

    today = InventoryItem.objects.filter(volunteer = vol.id)
    inv_today = sum([inv_obj.amount for inv_obj in today])

    all_time = InventoryItem.objects.filter(volunteer__email = vol.email)
    inv_all_time = sum([inv_obj.amount for inv_obj in all_time])

    return JsonResponse({'success':True,'today':inv_today,'all_time':inv_all_time})

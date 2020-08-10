from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import json
import re
from django.views.decorators.csrf import csrf_exempt
from .models import Event, Organization, Volunteer
import datetime

# Create your views here.
@csrf_exempt
def event_list(request):
    data = Event.objects.filter(date__gte=datetime.date.today()).values_list('id', 'name')
    data = list(data)
    json_data = {'data':data}
    print(json_data)
    response = JsonResponse(json_data)
    response["Access-Control-Allow-Origin"] = "*"
    return response

@csrf_exempt
def organization_list(request):
    #Load JSON request
    context = json.loads(request.body)

    #Validate event
    #Verifies event is an integer
    if isinstance(context['event'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid event ID. Must be an integer.'})
    #Verifies that event is valid ID
    event_query = Event.objects.filter(id=context['event'])
    if event_query.count() == 0:
        return JsonResponse({'success':False,'error':'Event ID out of range.'})
    #Verify event date is in future.
    event_query = Event.objects.get(id=context['event'])
    if event_query.date < datetime.date.today():
        return JsonResponse({'success':False,'error':'Event cannot be in the past.'})

    #Retrieve all organizations registered for the specified event
    data = Organization.objects.filter(event=event_query).values_list('id', 'name')
    data = list(data)
    json_data = {'data':data}
    print(json_data)
    response = JsonResponse(json_data)
    response["Access-Control-Allow-Origin"] = "*"
    return response


@csrf_exempt
def register_volunteer(request):
    #Load JSON request
    context = json.loads(request.body)

    #Validate event
    #Verifies event is an integer
    if isinstance(context['event'], int) == False:
        return JsonResponse({'success':False,'error':'Invalid event ID. Must be an integer.'})
    #Verifies that event is valid ID
    event_query = Event.objects.filter(id=context['event'])
    if event_query.count() == 0:
        return JsonResponse({'success':False,'error':'Event ID out of range.'})
    #Verify event date is in future.
    event_query = Event.objects.get(id=context['event'])
    if event_query.date < datetime.date.today():
        return JsonResponse({'success':False,'error':'Event cannot be in the past.'})

    #Validate password
    #Verifies password is a string
    if isinstance(context['password'], str) == False:
        return JsonResponse({'success':False, 'error':'Invalid password. Must be a string.'})
    #Verifies password is a match
    if event_query.password != context['password']:
        return JsonResponse({'success':False,'error':'Incorrect password.'})

    #Validate first name
    #Verifies that first_name is a string
    if isinstance(context['first_name'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid first name. Must be a string.'})
    #Verifies that first_name is under 30 characters
    if len(context['first_name']) > 30:
        return JsonResponse({'success':False,'error':'First name must be under 30 characters.'})

    #Validate last name
    #Verifies that last_name is a string
    if isinstance(context['last_name'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid last name. Must be a string.'})
    #Verifies that last_name is under 30 characters
    if len(context['last_name']) > 30:
        return JsonResponse({'success':False,'error':'Last name must be under 30 characters.'})

    #Validate email address
    #Verifies that email is a string
    if isinstance(context['email'], str) == False:
        return JsonResponse({'success':False,'error':'Invalid email address. Must be a string.'})
    #Verifies the email string is a properly formatted email.
    if bool(re.match('^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$',context['email'])) == False:
        return JsonResponse({'success':False,'error':'Invalid email address.'})

    if 'organization' in context:
        #Validate organization
        #Verifies organization is an integer
        if isinstance(context['organization'], int) == False:
            return JsonResponse({'success':False,'error':'Invalid organization ID. Must be an integer.'})
        #Verifies that organization is valid ID
        organization_query = Organization.objects.filter(id=context['organization'])
        if organization_query.count() == 0:
            return JsonResponse({'success':False,'error':'Organization ID out of range.'})
        organization_query = Organization.objects.get(id=context['organization'])
        #Register valid volunteer
        volunteer = Volunteer(event=event_query,organization=organization_query,first_name=context['first_name'],last_name=context['last_name'],email=context['email'])
        volunteer.save()
        return JsonResponse({'success':True,'id':volunteer.id})
    else:
        #Register valid volunteer
        volunteer = Volunteer(event=event_query,first_name=context['first_name'],last_name=context['last_name'],email=context['email'])
        volunteer.save()
        return JsonResponse({'success':True,'id':volunteer.id})

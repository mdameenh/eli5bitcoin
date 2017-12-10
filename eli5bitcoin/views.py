from django.shortcuts import render
from django.http import JsonResponse
from eli5bitcoin import context

t_resp = {"title": "BITCOIN"}

def index(request):
    return render(request, 'index.html')

def learn(request):
    return JsonResponse(context.learn_context, safe=False)

def store(request):
    return JsonResponse(context.store_context, safe=False)

def buy(request):
    return JsonResponse(context.buy_context, safe=False)

def donate(request):
    return JsonResponse(t_resp, safe=False)

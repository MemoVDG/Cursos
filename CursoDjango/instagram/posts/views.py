from django.http import HttpResponse
from django.shortcuts import render


# Utilities
from datetime import datetime

posts = [
    {
        'title': 'Mont Blanc',
        'user': {
            'name': 'Yesica Cortes',
            'picture': 'http://picsum.photos/200/200?image=436'
        },
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'photo': 'http://picsum.photos/200/200?image=1036'
    },
    {
        'name': 'Lee Blanc',
        'user': {
            'name': 'Raul Cortes',
            'picture': 'http://picsum.photos/200/200?image=136'
        },
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'photo': 'http://picsum.photos/200/200?image=136'
    },
    {
        'name': 'Mont Ruiz',
        'user': {
            'name': 'Mica Rues',
            'picture': 'http://picsum.photos/200/200?image=36'
        },
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'photo': 'http://picsum.photos/200/200?image=103'
    }
]

def list_post(request):
    """List existing posts"""
    return render(
        request, 
        'feed.html',
        {
            'posts': posts
        }
        )

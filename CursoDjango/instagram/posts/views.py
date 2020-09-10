from django.http import HttpResponse
from django.shortcuts import render


# Utilities
from datetime import datetime

posts = [
    {
        'name': 'Mont Blanc',
        'user': 'Yesica Cortes',
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'picture': 'http://picsum.photos/200/200?image=1036'
    },
    {
        'name': 'Lee Blanc',
        'user': 'Raul Cortes',
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'picture': 'http://picsum.photos/200/200?image=136'
    },
    {
        'name': 'Mont Ruiz',
        'user': 'Mica Rues',
        'timestamp': datetime.now().strftime('%b %dth, %Y - %H:%M hrs'),
        'picture': 'http://picsum.photos/200/200?image=103'
    }
]

def list_post(request):
    """List existing posts"""

    content = []
    for post in posts:
        content.append("""
            <p><strong>{name}</strong></p>
            <p><small>{user} - <i>{timestamp}</i></small></p>
            <figure><img src="{picture}"/></figure>
        """.format(**post))

    return render(request, 'feed.html')

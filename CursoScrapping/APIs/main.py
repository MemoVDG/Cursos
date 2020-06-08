import requests
url_base = 'http://api.spotify.com/v1'
ep_artis = '/artist/{artist_id}'
id_iron_maiden = '6mdiAmATAx73kdxrNrnlao'
url_final = url_base+ep_artis.format(artist_id=id_iron_maiden)

print(url_final)

r = requests.get(url_final)


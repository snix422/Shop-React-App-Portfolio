nginx -g 'daemon off;' &

json-server --host 0.0.0.0 --port 3000 /app/db.json
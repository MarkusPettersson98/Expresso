.PHONY: clean clean-frontend clean-backend install backend backend-prod frontend frontend-prod

install: backend frontend

clean: clean-backend clean-frontend

backend:

backend-prod:

clean-backend:

frontend: 
	cd Frontend; npm install;

frontend-prod: clean-frontend frontend
	cd Frontend; npm run build;

clean-frontend:
	cd Frontend; rm -rf dist/;


	
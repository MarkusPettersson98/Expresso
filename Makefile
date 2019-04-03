.PHONY: clean clean-frontend clean-backend install backend backend-prod frontend frontend-prod

install: backend frontend

clean: clean-backend clean-frontend
	rm -rf Frontend/dist/;

backend:
	cd Backend; npm install;

backend-prod:

clean-backend:
	cd Backend; rm -rf node_modules;

frontend: 
	cd Frontend; npm install;

frontend-prod: clean-frontend frontend
	cd Frontend; npm run build;

clean-frontend:
	cd Frontend; rm -rf node_modules;


	
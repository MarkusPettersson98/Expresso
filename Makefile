.PHONY: clean clean-frontend clean-backend clean-app install backend backend-prod frontend frontend-prod app app-prod

backend_path  = Backend
frontend_path = Frontend
app_path      = App
frontend_dist = dist

dependencies  = node_modules

install: backend frontend app

clean: clean-backend clean-frontend clean-app
	@rm -rf $(frontend_path)/$(frontend_dist);

backend:
	@cd     $(backend_path); \
	npm install

backend-prod:

clean-backend:
	@cd     $(backend_path); \
	rm -rf  $(dependencies)

frontend:
	@cd     $(frontend_path); \
	npm install

frontend-prod: clean-frontend frontend
	@cd     $(frontend_path); \
	npm run build;

clean-frontend:
	@cd     $(frontend_path); \
	rm -rf  $(dependencies);


app:
	@cd     $(app_path); \
	npm install

app-prod: clean-app app

clean-app:
	@cd     $(app_path); \
	rm -rf  $(dependencies);

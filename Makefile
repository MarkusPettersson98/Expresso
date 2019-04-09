.PHONY: clean clean-frontend clean-backend install backend backend-prod frontend frontend-prod

backend_path = Backend
frontend_path = Frontend
frontend_dist = dist

dependencies = node_modules

install: backend frontend

clean: clean-backend clean-frontend
	@rm -rf $(frontend_path)/$(frontend_dist);

backend:
	@cd $(backend_path); \
	npm install

backend-prod:

clean-backend:
	@cd $(backend_path); \
	rm -rf $(dependencies)

frontend:
	@cd $(frontend_path); \
	npm install

frontend-prod: clean-frontend frontend
	@cd $(frontend_path); \
	npm run build;

clean-frontend:
	@cd $(frontend_path); \
	rm -rf $(dependencies);



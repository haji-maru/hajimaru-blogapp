Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/' => 'home#index'
  root to: 'articles#index' # 必ず使う

  resources :articles do
    resources :comments, only: [:new, :create]

    resource :like, only: [:create]
  end

  resource :profile, only: [:show, :edit, :update]
end

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get '/' => 'home#index'
  root to: 'articles#index' # 必ず使う
  resource :timeline, only: [:show] # %i(show create) でも可能

  resources :articles do
    resources :comments, only: [:index, :new, :create]

    resource :like, only: [:show, :create, :destroy]
  end

  resources :accounts, only: [:show] do
    resources :follows, only: [:create]
    resources :unfollows, only: [:create]
  end

  resource :profile, only: [:show, :edit, :update]
  resources :favorites, only: [:index]
end

class HomeController < ApplicationController
    def index
        # render 'home/index'　#なくても表示される railsの機能
        @title = 'デイトラ'
    end

    def about
        render 'home/about'
    end
end
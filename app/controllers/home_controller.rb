class HomeController < ApplicationController
    def index
        # render 'home/index'　#なくても表示される railsの機能
        # @title = 'デイトラ'
        @article = Article.first
    end

    def about
        render 'home/about'
    end
end
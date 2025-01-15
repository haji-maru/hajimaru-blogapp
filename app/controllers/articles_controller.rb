class ArticlesController < ApplicationController
    def index
        # render 'home/index'　#なくても表示される railsの機能
        # @title = 'デイトラ'
        @article = Article.first
    end
end
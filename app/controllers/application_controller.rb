class ApplicationController < ActionController::Base
  before_action :set_locale
  def current_user
    ActiveDecorator::Decorator.instance.decorate(super) if super.present?
    super
  end

  private
  def set_locale
    # 設定言語を変更する
    I18n.locale = params[:locale] || I18n.default_locale
  end
end

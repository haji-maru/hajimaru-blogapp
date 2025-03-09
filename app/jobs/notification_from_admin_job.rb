class NotificationFromAdminJob < ApplicationJob
  queue_us :default

  # perform 必須
  def perform
  end
end
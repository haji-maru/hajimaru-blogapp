class NotificationFromAdminJob < ApplicationJob
  queue_us :default

  # perform 必須
  def perform(msg)
    User.all.each do |user|
      NotificationFromAdminMailer.notify(user, msg).deliver_later
    end
  end
end
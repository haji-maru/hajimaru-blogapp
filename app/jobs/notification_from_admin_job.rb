class NotificationFromAdminJob < ApplicationJob
  queue_as :default

  # perform 必須
  def perform(msg)
    User.all.each do |user|
      NotificationFromAdminMailer.notify(user, msg).deliver_later
    end
  end
end
class RelationshipMailer < ApplicationMailer
  def new_follower(user)
    @user = user
    mail to: user.email, subject: '【おしらせ】フォローされました'
  end
end
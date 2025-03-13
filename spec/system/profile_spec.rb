require 'rails_helper'

RSpec.describe 'Profile', type: :system do
  let!(:user) { create(:user, :with_profile) }
end
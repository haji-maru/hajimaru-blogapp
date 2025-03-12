require 'rails_helper'

RSpec.describe 'Api::Comments', type: :request do
  describe 'GET /api/comments' do
    let!(:user) { create(:user) }
    let!(:article) { create(:article, user: user) }
    let!(:comments) { create_list(:comment, 3, article: article) }

    it '200ステータス' do
      get api_comments_path
      expect(response).to have_http_status(200)
    end
  end
end

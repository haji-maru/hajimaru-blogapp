require 'rails_helper'

RSpec.describe 'Api::Comments', type: :request do
  describe 'GET /api/comments' do
    it 'works! (now write some real specs)' do
      get api_comments_path
      expect(response).to have_http_status(200)
    end
  end
end

module CurrentUserConcern
    extend ActiveSuppoort::Concern

include do
    before_action :set_current_uset
end

def set_current_user
    if session[:user_id]
        @current_user = User.find(session(:user_id))
end
    
end
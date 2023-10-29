# frozen_string_literal: true

puts 'Create admin user'

User.create! do |user|
  user.email = 'admin@jacky.com'
  user.password = '12345678'
  user.confirmed_at = Time.current
  user.add_role :admin
end

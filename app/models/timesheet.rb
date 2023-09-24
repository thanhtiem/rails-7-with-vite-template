# frozen_string_literal: true

class Timesheet < ApplicationRecord
  validates :start_time, :end_time, presence: true
end

# frozen_string_literal: true

class Timesheet < ApplicationRecord
  validates :start_time, :end_time, presence: true
  validates :end_time, comparison: { greater_than: :end_time }
end

# frozen_string_literal: true

class AddDayToTimesheet < ActiveRecord::Migration[7.0]
  def change
    add_column :timesheets, :day, :date
  end
end

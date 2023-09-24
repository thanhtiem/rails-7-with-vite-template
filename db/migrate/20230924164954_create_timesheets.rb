# frozen_string_literal: true

class CreateTimesheets < ActiveRecord::Migration[7.0]
  def change
    create_table :timesheets do |t|
      t.datetime :start_time
      t.datetime :end_time

      t.timestamps
    end
  end
end

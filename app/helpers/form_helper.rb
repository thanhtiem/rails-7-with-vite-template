# frozen_string_literal: true

module FormHelper
  def tailwind_form_for(object, **options, &)
    default_form_class = 'grid grid-cols-1 gap-x-4 gap-y-6 items-start sm:grid-cols-12'
    options[:html] ||= {}
    options[:html][:class] = default_form_class # you can even use arguments_with_updated_default_class here to make the default classes more flexible
    options[:wrapper] = :plain
    options[:builder] = Builders::TailwindFormBuilder

    simple_form_for(object, **options, &)
  end
end

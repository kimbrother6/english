from django import template

register = template.Library()

@register.filter
def space_to_underscore(value):
    split_value = value.split(' ')
    new_str = ''
    
    for i in range(len(split_value)):
      new_str += split_value[i]
      if i < len(split_value) - 1:
          new_str += '_'

    return new_str

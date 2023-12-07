import re

# duplicate the colors with different opacity as required
def process_colors(input_file, output_file):
    with open(input_file, 'r') as file:
        scss_content = file.read()

        color_variable_pattern = r'(--md-sys-color-[a-zA-Z0-9_-]+):\s*#([a-fA-F0-9]{6});'

        def add_opacities(match):
            color_name = match.group(1)
            color_hex = match.group(2)

            opacities = ['008', '012', '016']

            opacity_values = {
                '008': '14',
                '012': '1F',
                '016': '29'
            }

            additional_colors = []

            for opacity in opacities:
                hex_opacity = opacity_values[opacity]
                modified_color = f'{color_name}-opacity-{opacity}: #{color_hex}{hex_opacity};'
                additional_colors.append(modified_color)

            return match.group(0) + '\n'.join(additional_colors)

        processed_scss = re.sub(color_variable_pattern, add_opacities, scss_content)

    with open(output_file, 'w') as output:
        output.write(processed_scss)


input_file = 'old.colors.token.scss'
output_file = 'colors.token.scss'

process_colors(input_file, output_file)

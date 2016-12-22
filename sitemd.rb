#!/usr/bin/env ruby
# Generates static websites with markdown
# Daniel Ethridge

# Gets the .smd file to parse as an argument and loads it
help = "Usage : #{__FILE__} [sitemarkdown.smd]"
smdfile = ARGV[0].to_s
if smdfile.nil? ; puts help; exit end
if ! File.exist?(smdfile) ; puts help; exit end
content = File.read(smdfile)

# Parses the lines that make up the 'head' tag
def head_parse(block)
  i = 0
  while i < block.lines.count
    line = block.lines[i].delete("\n")
    case
    when line.start_with?("\\# ")
      comment = line[3..-1]
      puts "<!-- #{comment} -->"
    when line.start_with?("Title : ")
      title = line[8..-1]
      puts "<title>#{title}</title>"
    when line.start_with?("Favicon : ")
      favicon = line[10..-1]
      puts "<link rel=\"icon\" href=\"#{favicon}\" type=\"image/x-icon\">"
    when line.start_with?("Encode : ")
      encode = line[9..-1]
      puts "<meta charset=\"#{encode}\">"
    when line.start_with?("CSS : ")
      css = line[6..-1]
      puts "<link rel=\"stylesheet\" type=\"text/css\" href=\"#{css}\">"
    when line.start_with?("JS : ")
      js = line[5..-1]
      puts "<script type=\"text/javascript\" src=\"#{js}\"></script>"
    end
    i += 1
  end
end

# Parses the lines that make up the 'body' tag
def line_parse(block)
  i = 0
  block = block.join(" \n")
  while i < block.lines.count
    line = block.lines[i].delete("\n")
    case
      when line.start_with?("\\# ")
        comment = line[3..-1]
        puts "<!-- #{comment} -->"
      when line.start_with?("[")
        puts "<p>"
      when line.start_with?("]")
        puts "</p>"
      when line.start_with?("# ")
        h1 = line[2..-1]
        puts "<h1>#{h1}</h1>"
      when line.start_with?("## ")
        h2 = line[3..-1]
        puts "<h2>#{h2}</h2>"
      when line.start_with?("### ")
        h3 = line[4..-1]
        puts "<h3>#{h3}</h3>"
      when line.start_with?("#### ")
        h4 = line[5..-1]
        puts "<h4>#{h4}</h4>"
      when line.start_with?("##### ")
        h5 = line[6..-1]
        puts "<h5>#{h5}</h5>"
      when line.start_with?("###### ")
        h6 = line[7..-1]
        puts "<h6>#{h6}</h6>"
      when line.start_with?("+")
        if line.start_with?("+ ")
          divclass = line[2..-1]
          puts "<div class=\"#{divclass}\">"
        else
          puts "<div>"
        end
      when line.start_with?("-")
        puts "</div>"
      when line.start_with?("@")
        puts "\n<hr>\n\n"
      when line.start_with?("$ ")
        li = line[2..-1]
        puts "<li>#{li}</li>"
      when line.start_with?("img : ")
        image = line[6..-1]
        puts "<img class=\"pure-img\" src=\"#{image}\">"
      when line.start_with?("link : ")
        link = line[7..-1]
        puts "<a href=\"#{link}\">#{link}</a>"
      when line.start_with?("button : ")
        button = line[9..-1]
        puts "<a class=\"button\" href=\"#{button}\">#{button}</a>"
      when line.start_with?("pbutton : ")
        pbutton = line[10..-1]
        puts "<a class=\"button-primary\" href=\"#{pbutton}\">#{pbutton}</a>"
      when line.start_with?("code[")
        puts "<pre><code>"
      when line.start_with?("code]")
        puts "</code></pre>"
      when line.start_with?(".")
        pass = line[1..-1]
        puts pass
      when line.start_with?("*")
       bold = line[1..-1]
       puts "<b>#{bold}</b>"
      when line.start_with?("_")
       italic = line[1..-1]
       puts "<i>#{italic}</i>"
      when line.start_with?("~")
       strike = line[1..-1]
       puts "<strike>#{strike}</strike>"
      when line.start_with?("^")
       sup = line[1..-1]
       puts "<sup>#{sup}</sup>"
      when line.start_with?(">")
       highlight = line[1..-1]
       puts "<mark>#{highlight}</mark>"
      else
        puts line
    end
    i += 1
  end
end


# Generates the 'head' contents
def head_gen(file)
  head = file.split("\n\n")[0]
  if head == "NO HEAD"
    puts "<head>"
    puts "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/base-min.css\">"
    puts "<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/smd_base.css\">"
    puts "</head>"
  else
    puts "<head>"
    head_parse(head)
    puts "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/base-min.css\">"
    puts "<link rel=\"stylesheet\" type=\"text/css\" href=\"/css/smd_base.css\">"
    puts "</head>"
  end
end

# Generates the 'body' contents
def body_gen(file)
  puts "<body>"
  body = file.split("\n\n")[1..-1]
  puts "<div class=\"container\">"
  line_parse(body)
  puts "</div>"
  puts "</body>"
end


# Glues together the final HTML document
puts "<!DOCTYPE html>\n<html>"
head_gen(content)
body_gen(content)
print "</html>"

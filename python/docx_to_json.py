from docx import Document
import json
import sys

try:
    _in = sys.argv[1]
    if ".docx" not in _in:
        raise ValueError("Invalid file type")
    try:
        _out = sys.argv[2]
    except:
        _out = f"./{_in.split('.docx')[0]}.json"
except IndexError:
    raise ValueError("No file provided")

def write_doc(input, output=None):
    output = output or f"./{input.split('.docx')[0]}.json"
    document = Document(_in)

    split_peas = []
    curr = []
    for p in document.paragraphs:
        if p.contains_page_break:
            split_peas.append(curr)
            curr = []
        curr.append(p)
    split_peas.append(curr)

    js = {}
    for pea in split_peas:
        t_name = "default"
        temp = {}
        for p in pea:
            match [p.style.name, p.text]:
                case ["Heading 1", text]:
                    temp["title"] = text
                case ["Subtitle", text]:
                    t_name = text.lower().replace(" ", "_")
                case ["Normal", text]:
                    if not text:
                        continue
                    if "p1" in temp:
                        temp["p2"] = text
                    else:
                        temp["p1"] = text
                case ["List Paragraph", text]:
                    text = text.split(":")
                    text = {"title": text[0], "content": text[1]}
                    if "bp" in temp:
                        temp["bp"].append(text)
                    else:
                        temp["bp"] = [text]
                case _:
                    pass
        js[t_name] = temp
        
    json.dump(js, open(_out, "w"))
    return _out
    
if __name__ == "__main__":
    write_doc(_in, _out)
import json
from pathlib import Path
import docx_to_json
import sys
try:
    _path = sys.argv[1]
    _name = sys.argv[2]
except:
    raise ValueError("No file provided")

_path = docx_to_json.write_doc(_path)
current_path = Path(__file__).parent.parent

src_public_path = Path(current_path, "src", "public", f"{_name}.json")

initial = json.load(open(_path, "r"))

if src_public_path.exists():
    old = json.load(open(src_public_path, "r"))
    initial.update(old)

json.dump(initial, open(src_public_path, "w"))
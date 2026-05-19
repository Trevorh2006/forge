from dataclasses import dataclass
from pathlib import Path

@dataclass
class CodeFile:
    path: str
    language: str
    size: int
    sha: str
    content: str

def iter_code_files(directory: str):
    path = Path(directory)
    for file_path in path.iterdir():
        if file_path.is_file():
            yield CodeFile(
                path=str(file_path),
                language=file_path.suffix[1:],  # Get the file extension without the dot
                size=file_path.stat().st_size,
                sha='',  # Placeholder for SHA, can be calculated if needed
                content=file_path.read_text()
            )

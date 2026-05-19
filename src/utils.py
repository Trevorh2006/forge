def filter_by_extension(file_list: list[str], extension: str) -> list[str]:
    '''
    Filters a list of files by a specific extension.
    Used by Forge when filtering GitHub file trees by language.
    '''
    return [file for file in file_list if file.endswith(extension)]

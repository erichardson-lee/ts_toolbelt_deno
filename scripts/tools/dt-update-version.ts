import replace from './regex-update-file.ts'

replace('./dt/types', '"ts-toolbelt": ".*"', '"ts-toolbelt": "test"',
    [
        '?.*/package.json',
    ],
    [],
)

import replace from './regex-update-file.ts'

replace('.', '"version": "(?<version>.*)"', `"version": "<version>-test.${Date.now()}"`,
    [
        'package.json',
    ],
    [],
)

# Хуки:

## 1. useState

#### - добавляет state в функцию [import {useState} from 'react']

## 2. useEffect(callback, deps)

#### - в зависимости от deps(dependanties), будет зависить еффект [import {useEffect} from 'react']:

- [] - componentDidMount
- [value] - componentDidUpdate (обновление конткретно того что в [])
- return {необходимый код} - componentWillUnmount

###

###

###

##### \*обьекты в хуки лучше не передавать, а сделать каждый обьект отдельным хуком

#### \*хуки не могут быть по условию, их нужно вкладывать в верхнюю часть вашего кода и они не должны былть вложенными во что-то

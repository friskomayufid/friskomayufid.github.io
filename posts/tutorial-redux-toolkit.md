---
title: "Kenalan dengan Redux Toolkit"
date: "2023-04-05"
description: "Redux toolkit, redux dengan kekuatan super"
thumbnail: "/images/write.png"
---

Hi, di artikel kali ini aku akan bahas pengenalan apa itu redux toolkit dan kenapa sih kita harus pakai redux tookit ini untuk kebutuhan state management pada aplikasi react kita, di artikel ini aku juga akan jelasin gimana cara pakai nya ni redux toolkit.

Sebelum nya, Berikut adalah beberapa sub bab yang akan kita bahas dalam artikel tentang Redux Toolkit:

## Daftar isi
1. [Pengenalan dan Tujuan Redux Toolkit](#perkenalan)
2. [Instalasi dan Konfigurasi Redux Toolkit](#instalasi)
    1. [Menggunakan createSlice](#bab1)
    2. [Menggunakan createAsyncThunk](#bab2)
    3. [Menggunakan configureStore](#bab3)

## Pengenalan dan Tujuan Redux Toolkit <a name="perkenalan"></a>
Redux Toolkit adalah sebuah library open source yang dikembangkan oleh tim Redux yang bertujuan untuk mempermudah pengembangan aplikasi dengan menggunakan Redux. Redux toolkit dibangun karena 3 concern dibawah ini yaitu :
- "Saat mengkonfigurasi sebuah redux store terlalu kompleks"
- "Harus menambahkan banyak package untuk redux dapat berfungsi"
- "Terlalu banyak boilerplate kode pada aplikasi redux"

Jika kamu belum paham apa itu redux dan bagaimana cara redux bekerja, kamu bisa kunjungi link berikut untuk belajar bagaimana cara redux bekerja 
<a href="https://redux.js.org/tutorials/fundamentals/part-1-overview" _blank>Redux Fundamental</a>


## Instalasi dan Konfigurasi Redux Toolkit <a name="instalasi"></a>
Langsung saja kita buat contoh aplikasinya dengan yang pertama yaitu menginstall aplikasi react js menggunakan vite

`npm create vite@latest`

kemudian isikan nama project dan pilih react, bisa menggunakan javascript atau typescript.

setelah itu masuk kedalam folder yang sudah kita buat tadi lalu install package dengan perintah

`npm install`


### Menggunakan createSlice <a name="bab1"></a>
### Menggunakan createAsyncThunk <a name="bab2"></a>
### Menggunakan configureStore <a name="bab3"></a>


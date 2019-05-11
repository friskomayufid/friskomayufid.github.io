---
title: Cara Custom Domain dengan Github Pages
date: "2019-05-11"
template: "post"
draft: false
slug: "/blog/custom-domain-github-pages/"
category: "Web Tutorial"
tags:
  - "Tulisan"
description: "Bagaimana membuat custom domain pada github pages dengan hanya 3 langkah saja."
---


![github pages](/media/github-pages.png)

<p>Github pages merupakan salah satu fitur dari Github. Disini kamu bisa upload website hasil buatan kamu seperti company profile, portofolio atau bahkan blog sekalipun dengan domain username.github.io.</p>

<p>Oke, sekarang misalkan kamu tidak mau dengan domain mu yang sekarang dan ingin mengcustom domain mu sendiri, misal dengan domain .com atau .space seperti Saya sekarang ini. Ternyata cara nya cukup mudah.</p>

<h2>Beli Domain di situs Registrar Domain</h2>

<p>Untuk pilihan beli domain ini, Kamu bisa beli dimana saja asalkan di tempat kamu beli domain terdapat settingan untuk mengatur DNS domain. Disini Saya menggunakan namecheap untuk membeli domain.</p>

<h2>Setting DNS Domain</h2>
<p>Setelah kamu login ke situs kamu beli domain, selanjutnya masuk ke menu Domain kemudian Advance DNS. Setelah itu silahkan tambah record dengan cara klik button Add New Record dan tambahkan A Record.</p>

<ol>
    <li>185.199.108.153</li>
    <li>185.199.109.153</li>
    <li>185.199.110.153</li>
    <li>185.199.111.153</li>
</ol>

<p>Setelah selesai tambahkan CNAME Record dengan value username github kamu (username.github.io).</p>

<p>Jika sudah maka settingan DNS kamu akan seperti ini,</p>

![setting dns domain](/media/custom-domain-github.png)

<h2>Setting Domain pada Github Repository</h2>
<p>Setelah selesai dengan settingan domain nya, langkah berikut nya adalah masuk ke github kamu.</p>

<ol>
    <li>Buka repository Github pages</li>
    <li>klik setting pada repository</li>
    <li>kemudian masukan nama domain custom kamu ke dalam menu Custom domain dan terakhir klik save.</li>
</ol>

![setting domain github pages](/media/setting-domain-github-pages.png)

<p>Tunggu beberapa menit dan voila ! Sekarang kamu sudah dapat mengakses website kamu dengan menggunakan domain custom tadi.</p>

<p>Semoga Bermanfaat !</p>
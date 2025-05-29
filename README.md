# Kahve Dünyası - Blog Deneme

Bu proje Astro framework'ü kullanılarak oluşturulmuş temel bir kahve blogu örneğidir. Kahve yapım teknikleri, çeşitleri ve lezzet sırlarını keşfedin.

## Proje Yapısı

```text
/
├── public/        # Statik varlıklar (resimler, favicon vb.)
├── src/
│   ├── components/ # Bileşenler
│   ├── layouts/    # Sayfa düzenleri
│   ├── pages/      # Sayfa dosyaları (.astro)
│   └── styles/     # CSS dosyaları
└── package.json   # Proje bağımlılıkları ve komutlar
```

## Kurulum ve Çalıştırma

```sh
npm install
npm run dev     # Geliştirme sunucusunu başlatır (http://localhost:53736)
npm run build   # Üretim için siteyi build eder (./dist)
npm run preview # Üretim build'ini yerel olarak önizler
```

## Katkıda Bulunma

Pull request oluşturarak katkıda bulunabilirsiniz. Lütfen ana branch'e doğrudan commit göndermeyin.

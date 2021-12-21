<h1> Gulp.js Kullanımı </h1>
<p>Gulp js nedir, neden ihtiyaç duyarız, neler yapılır....</p>

<h2> Node.js Nedir?</h2>
JavaScript kodunu sadece tarayıcılarda değil aynı zamanda bilgisayarınızda bağımsız şekilde çalışacak bir uygulama şeklinde kullanmak istenmesinden ortaya çıkmıştır.

Böylece JavaScript sadece web uygulamaları için kullanılan bir teknoloji olmaktan çıkmış, Python gibi Java gibi programlama dilleri ile aynı kapasitelere ulaşmıştır.

V8 engine JavaScript kodu makine koduna çevirdiği için uygulamalar çok hızlı performanslara erişebilmektedir.

<h2>NPM Nedir?</h2>
<p>Paket yönetim sistemi, node js üzerinde kullanacağımız paketeri npm üzerinden indiriyoruz. İndireceğimiz paketlerin depolandığı yer.

<code>npm init --y</code> diyerek default <code> package.json</code> oluşturuyoruz. --y tanımlamaları geçmek için kulanılıyor.

<p>package.json, npm üzerinden yükleyeceğimiz paketleri organize ettiğimiz belge.</p>
</p>

<h2>Gulp JS Nedir?</h2>
Frontend tarafındaki işlemleri otomatikleştiren ve berlilenen yerler çıktıları gönderen araç.
<code>npm install gulp</code>
package.json dosyası içerisinde bulunan <code>dependencies</code> objesi prod ortamına geçtiğinde servera indirilecek dosyaları belirtir. Eğer bu dosyaların servera yüklenmesini istemiyorsan <code>dev depandencies</code> olarak yüklemek gerekiyor yani sadece <code>dev</code> oratamında işimize yarıyorsa <code>npm install gulp --save-dev</code>

<h3>Gulp js Kullanımı</h3>
<p><code>gulpfile.js</code> dosyasımızı oluşturduktan sonra gerekli tanımlamaları ve kullanacağımı paketleri ekleyip task oluşturuyoruz.</p>

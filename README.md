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

<h4>Gulpjs metodları</h4>
<p> <code>gulp.task</code>: Görev oluşturmak,</p>   
<p> <code>gulp.src</code>: Kaynak dosyaları belirtmek,</p>   
<p> <code>gulp.dest</code>: Çıktının kaydolacağı hedef dizini belirlemek,</p>   
<p> <code>gulp.watch</code>: Değişikliği izleme ve görev çaığırmak, </p>   
<p> <code>pipe</code>: Modify, uygulama, dosya içi işlemler için kullanılır</p>

<h4>Watch için</h4>
<p>Eğer 3. versiyon kullanıyorsan watch için dosya tanımlaması:
<code>gulp.watch('app/css/*.css', ['görev-adi']);</code>
</p>
<p>Eğer 4.versiyon kullanıyorsan watch için dosya tanımlaması:
<code>gulp.watch('app/css/*.css', gulp.series('görev-adi'));</code>
</p>

<hr/>

Bu örnekte oluşturduğumuz taski başlatmak için komut satırına:
<code>gulp watch</code> demek yeterli olur bu şekilde index.scss dosyasında yaptığımız her değişiklik main.css dosyasına aktarılacaktır.

<hr/>

<p>Kaynaklar</p>   
- <a href="https://css-tricks.com/gulp-for-beginners/">https://css-tricks.com/gulp-for-beginners/</a>
- <a href="https://www.youtube.com/watch?v=STxO9XQJ_lg">https://www.youtube.com/watch?v=STxO9XQJ_lg</a>
- <a href="https://www.youtube.com/watch?v=GvwiZuXK65I">https://www.youtube.com/watch?v=GvwiZuXK65I</a>

<template>
  <DocContainer page-title="Markdown دقیقا چیه ؟">
    <div class="paragraph-container">
      <Paragraph>
        <Bold>
          Markdown
        </Bold>
        یک زبان نشانه‌گذاری ساده است که میتونیم از آن برای افزودن عناصر قالب‌بندی به متن‌ استفاده کنیم. این زبان توسط
        جان گروبر در سال 2004 ایجاد شده و الان یکی از محبوب‌ترین زبان‌های نشانه‌گذاری در جهان است.
        استفاده از Markdown با
        <a target="_blank"
           href="https://fa.wikipedia.org/wiki/%D9%88%DB%8C%D8%B2%DB%8C%E2%80%8C%D9%88%DB%8C%DA%AF_(%D9%86%D9%88%D8%B9_%D9%88%DB%8C%D8%B1%D8%A7%DB%8C%D8%B4_%D8%B3%D9%86%D8%AF)">ویرایشگر
          WYSIWYG</a>
        کاملا متفاوته. در برنامه‌هایی مثل Microsoft Word که یک ویرایشگر متن به حساب میان، شما دکمه‌ها را برای قالب‌بندی
        کلمات و عبارات فشار میدین و تغییرات به طور فوری قابل مشاهده هستن :). اما Markdown این‌طور نیست. وقتی یک فایل با
        قالب Markdown ایجاد می‌کنین، با استفاده از قواعد خاص تعریف شده برای زبان مارک داون اون هارو به متن خودتون اضافه
        میکنین تا شیوه قالب بندی رو مشخص کنین

        مثلا شما میتونین داخل محتوای خودتون یک متن ایتالیک
        <italic>مثل این</italic>
        داشته باشید
        یا میتونین یک قطعه کد مثل کد پایین داشته باشین

      </Paragraph>

      <CodeBlock lang="language-go" :code="code"/>

      <Paragraph>
        تمامی این قواعد و نشانه ها تو قسمت های بعدی آموزش داده شدن پس اگه الان چیزی از اینا نمیفهمین اصلا نگران نباشین
      </Paragraph>
    </div>
  </DocContainer>
</template>

<script setup>

useSeoMeta({
  author: 'محمد داداش رستمی',
  title: 'راهنمای جامع Markdown - Markdown چیست',
  ogTitle: 'راهنمای جامع Markdown - Markdown چیست',
  description: 'در این راهنما به شما توضیح می‌دهیم که Markdown چیست و چگونه می‌توانید از آن برای نوشتن متن‌های زیبا و قابل‌خواندن استفاده کنید. Markdown یک زبان نشانه‌گذاری ساده و کاربردی است که به شما اجازه می‌دهد با کمترین تلاش متن‌های ساختاریافته تولید کنید.',
  ogDescription: 'Markdown چیست و چگونه می‌توانید از آن برای نوشتن متن‌های زیبا و قابل‌خواندن استفاده کنید؟ در این راهنمای جامع، با اصول و کاربردهای این زبان نشانه‌گذاری ساده و کاربردی آشنا شوید.',
  ogImage: 'https://cdn.icon-icons.com/icons2/1377/PNG/512/textxmarkdown_92778.png',
  robots: 'index, follow',
  colorScheme: 'dark light',
  charset: 'utf-8',
  keywords: 'Markdown, Markdown چیست, راهنمای Markdown, آموزش Markdown, زبان نشانه‌گذاری, نوشتن متن‌های ساختاریافته, ساختاردهی متن, زبان ساده نشانه‌گذاری'
});


const code = `
package main

      func main()
      {
          fmt.Println('hello world')
      }`
</script>

<style>
</style>
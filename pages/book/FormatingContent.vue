<script setup>
  const paragaphCode = `
  ایران کشوری است 4 فصل

  که دارای مناظر طبیعی و زیباییست
  `

  useSeoMeta({
    author: 'محمد داداش رستمی',
    title: 'راهنمای جامع Markdown - راهنمای قالب بندی محتوا در Markdown',
    ogTitle: 'راهنمای جامع Markdown - راهنمای قالب بندی محتوا در Markdown',
    description: 'در این راهنما با نحوه قالب بندی محتوا در Markdown آشنا شوید. این شامل بولد کردن، ایتالیک کردن و ایجاد پاراگراف در Markdown می‌باشد. با استفاده از این تکنیک‌ها، می‌توانید محتوای خود را بهبود دهید و سازماندهی کنید.',
    ogDescription: 'در این راهنما با نحوه قالب بندی محتوا در Markdown آشنا شوید. این شامل بولد کردن، ایتالیک کردن و ایجاد پاراگراف در Markdown می‌باشد. با استفاده از این تکنیک‌ها، می‌توانید محتوای خود را بهبود دهید و سازماندهی کنید.',
    ogImage: 'https://cdn.icon-icons.com/icons2/1377/PNG/512/textxmarkdown_92778.png',
    robots: 'index, follow',
    colorScheme: 'dark light',
    charset: 'utf-8',
    keywords: 'Markdown, راهنمای Markdown, آموزش Markdown, قالب بندی محتوا در Markdown, بولد کردن, ایتالیک کردن, پاراگراف در Markdown, زبان نشانه‌گذاری'
  });

</script>

<template>
  <DocContainer page-title="قالب بندی محتوا">
    <div class="paragraph-container">
      <Paragraph>
        همیشه جذاب ترین بخش نوشتن متن قالب بندی قسمت های مختلف اون هستش اگه مثل من عاشق نوشتن متن باشین باید احتمالا
        دونسته باشین اهمیت تاکید روی قسمت خاصی از متن به نسبت کل متن ارزش بیشتری به اون محتوا میده
        مثال های قالب بندی متن رو توی ادامه براتون آورده شده
      </Paragraph>
      <Space/>
      <h3>بولد کردن</h3>
      <Paragraph>اگر نیاز داشته باشیم قسمتی از متن رو
        در Markdown
        <strong>به حالت ضحیم (بولد)</strong>
        در بیاریم کافیه اون بخش رو مابین جفت علامت
        <code class="code-bubble">**</code>
        قرار دهیم به عنوان مثال :
      </Paragraph>

      <CodeExample code="ایران **کشوری 4 فصل** و دارای **مناظر طبیعی** زیباییست">
        <Paragraph>
          ایران
          <strong>کشوری 4 فصل</strong>
          و دارای
          <strong>مناظر طبیعی</strong>
          زیباییست
        </Paragraph>
      </CodeExample>

    </div>

    <div class="paragraph-container">
      <h3>ایتالیک کردن</h3>
      <Paragraph>
        اگر نیاز داشته باشیم قسمتی از متن رو
        در Markdown
        <strong>به حالت مورب (ایتالیک)</strong>
        در بیاریم کافیه اون بخش رو مابین یک علامت
        <code class="code-bubble">*</code>
        قرار دهیم به عنوان مثال :
      </Paragraph>

      <CodeExample code="ایران *کشوری 4 فصل* و دارای *مناظر طبیعی* زیباییست">
        <Paragraph>
          ایران
          <em>کشوری 4 فصل</em>
          و دارای
          <em>مناظر طبیعی</em>
          زیباییست
        </Paragraph>
      </CodeExample>

    </div>



    <div class="paragraph-container">
      <h3>ترکیب حالت ایتالیک و بولد</h3>
      <Paragraph>
       ممکنه در برخی جاها نیاز داشته باشین تا یک متن بولد داشته باشین که مقداری هم ایتالیک شده باشه نوشتن همچین چیزی در مارک داون به سادگی امکان پذیره فقط کافیه از
        <code class="code-bubble">***</code>
        در ابتدا و انتهای قسمت مد نظر خودتون استفاده کنید
      </Paragraph>

      <CodeExample code="ایران ***کشوری 4 فصل*** و دارای ***مناظر طبیعی*** زیباییست">
        <Paragraph>
          ایران
          <strong><em>کشوری 4 فصل</em></strong>
          و دارای
          <strong><em>مناظر طبیعی</em></strong>
          زیباییست
        </Paragraph>
      </CodeExample>

    </div>

    <div class="paragraph-container">
      <h3>ایجاد پاراگراف جدید</h3>
      <Paragraph>
        برای ایجاد یک پاراگراف جدید در Markdown کافیه که با زدن کلید اینتر یک خط خالی مابین دو خط خودتون ایجاد کنید در این صورت هر خط شما در یک خط جدید قرار میگیرند و یک پاراگراف جدید محسوب میشوند !
      </Paragraph>
      <Paragraph>به این مثال توجه کنید</Paragraph>
      <CodeExample :code="paragaphCode">
        <div class="row">
          <p class="col-12">ایران کشوری است 4 فصل</p>

          <p class="col-12"> که دارای مناظر طبیعی و زیباییست</p>
        </div>
      </CodeExample>
    </div>
    <div class="paragraph-container">
      <h4>به این نکات توجه کنید</h4>
      <ul class="d-flex flex-column gap-3 mt-3 items-list">
        <li>        بولد کردن متن رو میشود با قرار دادن دو زیرخط (Underline) در دو طرف بخش مورد نظر هم به متن اعمال کرد
          (مثلا  __متن من__)
          اما کماکان بهترین بهترین حالت استفاده از ** است</li>

        <li>        ایتالیک کردن متن رو میشود با قرار دادن یک زیرخط (Underline) در دو طرف بخش مورد نظر هم به متن اعمال کرد
          (مثلا  _متن من_)
          اما کماکان بهترین بهترین حالت استفاده از * است</li>

        <li>اگر دو خط رو بدون فاصله فی مابین در زیر هم قرار دهیم بجای دو پاراگراف مجزا یک پاراگراف محسوب خواهد شد</li>
      </ul>
    </div>
  </DocContainer>
</template>

<style scoped>
  .items-list{
    list-style: none;
  }
</style>
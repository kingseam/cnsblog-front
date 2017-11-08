<template>
  <div>
    <div class="box box-default color-palette-box">
      <div class="box-header with-border">
        <h3 class="box-title"><i class="fa fa-tag"></i> Color Palette</h3>
      </div>
      <div class="box-body">
        <row>
          <va-color-palette-set v-for="color in colors[0]"
            :color="color"
          ></va-color-palette-set>
        </row>
        <!-- /.row -->
        <row>
          <va-color-palette-set v-for="color in colors[1]"
            :color="color"
          ></va-color-palette-set>
        </row>
        <!-- /.row -->
      </div>
    </div>
    
    <h2 class="page-header">AdminLTE Custom Tabs</h2>

    <row>
      <div class="col-md-6">

        <va-custom-tab>

          <li slot="nav"
              class="dropdown">
            <a class="dropdown-toggle"
              data-toggle="dropdown"
              href="#">
                                    Dropdown <span class="caret"></span>
                                  </a>
            <ul class="dropdown-menu">
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Another action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Something else here</a></li>
              <li role="presentation"
                  class="divider"></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Separated link</a></li>
            </ul>
          </li>

          <li slot="nav"
              class="pull-right"><a href="#"
              class="text-muted"><i class="fa fa-gear"></i></a></li>

          <div slot="content"
              class="active"
              id="tab_1"
              title="Tab 1">
            <b>How to use:</b>

            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_2"
              title="Tab 2">
            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_3"
              title="Tab 3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <!-- /.tab-pane -->

        </va-custom-tab>

      </div>


      <div class="col-md-6">

        <va-custom-tab
          tabsClass="pull-right"
        >

          <li slot="nav"
              class="dropdown">
            <a class="dropdown-toggle"
              data-toggle="dropdown"
              href="#">
              Dropdown <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Another action</a></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Something else here</a></li>
              <li role="presentation"
                  class="divider"></li>
              <li role="presentation"><a role="menuitem"
                  tabindex="-1"
                  href="#">Separated link</a></li>
            </ul>
          </li>

          <li slot="nav" class="pull-left header"><i class="fa fa-th"></i> Custom Tabs</li>


          <div slot="content"
              class="active"
              id="tab_1"
              title="Tab 1">
            <b>How to use:</b>

            <p>Exactly like the original bootstrap tabs except you should use the custom wrapper <code>.nav-tabs-custom</code> to achieve this style.</p>
            A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_2"
              title="Tab 2">
            The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages.
          </div>
          <!-- /.tab-pane -->
          <div slot="content"
              id="tab_3"
              title="Tab 3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <!-- /.tab-pane -->

        </va-custom-tab>

      </div>

    </row>


  </div>

</template>

<script>
</script>

<style>

.color-palette {
  height: 35px;
  line-height: 35px;
  text-align: center;
}

.color-palette-set {
  margin-bottom: 15px;
}

.color-palette span {
  display: none;
  font-size: 12px;
}

.color-palette:hover span {
  display: block;
}

.color-palette-box h4 {
  position: absolute;
  top: 100%;
  left: 25px;
  margin-top: -40px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
  display: block;
  z-index: 7;
}

</style>

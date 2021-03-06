<template>
  <v-card>
    <div v-if="characterQuotesError">
      <Alert
        alertType="error"
        :body="errorMessages.LOAD_API_ERROR_MESSAGE('character quotes')"
      />
    </div>
    <div v-if="this.$store.state.characterQuotesWMovieId.length === 0">
      <Alert alertType="info" body="There are no quotes for this character" />
    </div>
    <v-card-title v-else>
      Movie
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search movie or quote"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      dense
      :headers="headers"
      :items="characterQuotes"
      :items-per-page="20"
      :loading="loader"
      loading-text="Loading... Please wait"
      mobile="true"
      item-key="_id"
      multi-sort
      :search="search"
      :sort-by="['dialog.length']"
      :sort-desc="[false, true]"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Quote
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.dialog"
                        label="Quote"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.movieName"
                        label="Movie name"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
// constants
import errorMessages from "../constants/errorMessages";

// components
import Alert from "../components/Alert.vue";

export default {
  name: "CharacersQuote",
  components: { Alert },
  data() {
    return {
      errorMessages: errorMessages,
      search: "",
      headers: [
        { text: "Quote", value: "dialog", align: "start" },
        { text: "Movie", value: "movieName", align: "start" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        dialog: "",
        movieName: "",
      },
      defaultItem: {
        dialog: "",
        movieName: "",
      },
    };
  },
  computed: {
    characterQuotes() {
      if (this.$store.state.characterQuotesWMovieId.length) {
        return this.$store.state.characterQuotesWMovieId;
      }
      return this.$store.state.characterQuotesWMovieId;
    },

    loader() {
      return this.$store.state.characterQuotesLoader;
    },

    characterQuotesError() {
      return this.$store.state.characterQuotesApiError;
    },

    formTitle() {
      return this.editedIndex === -1 ? "New Quote" : "Edit Quote";
    },
  },

  created() {
    if (this.$store.state.characterQuotesWMovieId.length === 0) {
      return this.$store.dispatch("getCharacterQuotes", this.$route.params.id);
    }
    this.desserts = this.$store.state.characterQuotesWMovieId;
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.characterQuotes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.characterQuotes.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.characterQuotes.splice(this.editedIndex, 1);
      this.$store.dispatch("sendBackEndRequests", {
        editedItem: this.editedItem,
        request: "delete",
      });
      this.closeDelete();
      this.$notify({
        group: "notification",
        type: "success",
        title: "Item deleted succesfully!",
        text: "This action trigger a DELETE_ITEM to back end",
      });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.characterQuotes[this.editedIndex], this.editedItem);
        this.$store.dispatch("sendBackEndRequests", {
          editedItem: this.editedItem,
          request: "upload",
        });
        this.$notify({
          group: "notification",
          type: "success",
          title: "Item uploaded succesfully!",
          text: "This action trigger a UPLOAD_ITEM to back end",
        });
      } else {
        this.characterQuotes.push(this.editedItem);
        this.$store.dispatch("sendBackEndRequests", {
          editedItem: this.editedItem,
          request: "create",
        });
        this.$notify({
          group: "notification",
          type: "success",
          title: "Item created succesfully!",
          text: "This action trigger a ADD_ITEM to back end",
        });
      }
      this.close();
    },
  },
};
</script>
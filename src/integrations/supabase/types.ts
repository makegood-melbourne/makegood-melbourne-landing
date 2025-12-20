export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      competitor_analysis: {
        Row: {
          analysis_date: string
          competitor_name: string
          competitor_url: string
          content_summary: string | null
          id: string
          key_services: string[] | null
          next_scan_date: string | null
          page_count: number | null
          ranking_position: number | null
          strengths: Json | null
          target_locations: string[] | null
          weaknesses: Json | null
        }
        Insert: {
          analysis_date?: string
          competitor_name: string
          competitor_url: string
          content_summary?: string | null
          id?: string
          key_services?: string[] | null
          next_scan_date?: string | null
          page_count?: number | null
          ranking_position?: number | null
          strengths?: Json | null
          target_locations?: string[] | null
          weaknesses?: Json | null
        }
        Update: {
          analysis_date?: string
          competitor_name?: string
          competitor_url?: string
          content_summary?: string | null
          id?: string
          key_services?: string[] | null
          next_scan_date?: string | null
          page_count?: number | null
          ranking_position?: number | null
          strengths?: Json | null
          target_locations?: string[] | null
          weaknesses?: Json | null
        }
        Relationships: []
      }
      contact_enquiries: {
        Row: {
          created_at: string
          email: string
          email_sent: boolean | null
          id: string
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          email_sent?: boolean | null
          id?: string
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          email_sent?: boolean | null
          id?: string
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      content_drafts: {
        Row: {
          content: string
          content_type: string
          created_at: string
          gap_id: string | null
          generated_images: Json | null
          id: string
          meta_description: string | null
          navigation_structure: Json | null
          published_at: string | null
          reviewed_at: string | null
          seo_score: number | null
          slug: string
          status: string
          target_keywords: string[] | null
          target_location: string | null
          title: string
          updated_at: string
          word_count: number | null
        }
        Insert: {
          content: string
          content_type: string
          created_at?: string
          gap_id?: string | null
          generated_images?: Json | null
          id?: string
          meta_description?: string | null
          navigation_structure?: Json | null
          published_at?: string | null
          reviewed_at?: string | null
          seo_score?: number | null
          slug: string
          status?: string
          target_keywords?: string[] | null
          target_location?: string | null
          title: string
          updated_at?: string
          word_count?: number | null
        }
        Update: {
          content?: string
          content_type?: string
          created_at?: string
          gap_id?: string | null
          generated_images?: Json | null
          id?: string
          meta_description?: string | null
          navigation_structure?: Json | null
          published_at?: string | null
          reviewed_at?: string | null
          seo_score?: number | null
          slug?: string
          status?: string
          target_keywords?: string[] | null
          target_location?: string | null
          title?: string
          updated_at?: string
          word_count?: number | null
        }
        Relationships: []
      }
      content_gaps: {
        Row: {
          competitor_urls: string[] | null
          content_classification: string | null
          content_draft_id: string | null
          created_at: string
          description: string
          estimated_traffic: number | null
          gap_type: string
          id: string
          impact_score: number | null
          priority_score: number | null
          status: string
          suggested_keywords: string[] | null
          target_location: string | null
          title: string
          updated_at: string
        }
        Insert: {
          competitor_urls?: string[] | null
          content_classification?: string | null
          content_draft_id?: string | null
          created_at?: string
          description: string
          estimated_traffic?: number | null
          gap_type: string
          id?: string
          impact_score?: number | null
          priority_score?: number | null
          status?: string
          suggested_keywords?: string[] | null
          target_location?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          competitor_urls?: string[] | null
          content_classification?: string | null
          content_draft_id?: string | null
          created_at?: string
          description?: string
          estimated_traffic?: number | null
          gap_type?: string
          id?: string
          impact_score?: number | null
          priority_score?: number | null
          status?: string
          suggested_keywords?: string[] | null
          target_location?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      content_images: {
        Row: {
          created_at: string | null
          draft_id: string | null
          file_path: string
          file_size: number
          id: string
          mime_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          draft_id?: string | null
          file_path: string
          file_size: number
          id?: string
          mime_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          draft_id?: string | null
          file_path?: string
          file_size?: number
          id?: string
          mime_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_images_draft_id_fkey"
            columns: ["draft_id"]
            isOneToOne: false
            referencedRelation: "content_drafts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "content_images_draft_id_fkey"
            columns: ["draft_id"]
            isOneToOne: false
            referencedRelation: "published_content"
            referencedColumns: ["id"]
          },
        ]
      }
      seo_parameters: {
        Row: {
          category: string | null
          created_at: string
          id: string
          is_active: boolean | null
          parameter_type: string
          priority: string | null
          recommendation: string
          source: string | null
          value: Json | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          parameter_type: string
          priority?: string | null
          recommendation: string
          source?: string | null
          value?: Json | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          is_active?: boolean | null
          parameter_type?: string
          priority?: string | null
          recommendation?: string
          source?: string | null
          value?: Json | null
        }
        Relationships: []
      }
    }
    Views: {
      published_content: {
        Row: {
          content: string | null
          content_type: string | null
          created_at: string | null
          generated_images: Json | null
          id: string | null
          meta_description: string | null
          published_at: string | null
          slug: string | null
          target_location: string | null
          title: string | null
          word_count: number | null
        }
        Insert: {
          content?: string | null
          content_type?: string | null
          created_at?: string | null
          generated_images?: Json | null
          id?: string | null
          meta_description?: string | null
          published_at?: string | null
          slug?: string | null
          target_location?: string | null
          title?: string | null
          word_count?: number | null
        }
        Update: {
          content?: string | null
          content_type?: string | null
          created_at?: string | null
          generated_images?: Json | null
          id?: string | null
          meta_description?: string | null
          published_at?: string | null
          slug?: string | null
          target_location?: string | null
          title?: string | null
          word_count?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
